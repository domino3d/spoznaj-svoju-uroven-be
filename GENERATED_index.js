/* eslint no-use-before-define: 0 */
const rp = require('request-promise');
const queryString = require('query-string');
const debuglog = require('util').debuglog('PROGRAMATOR.SK');

const TEMPLATE_REGEXP = /{\+?([^{}]+)}/g;

const template = (string, interpolate) => string.replace(TEMPLATE_REGEXP, (match, key) => {
  if (interpolate[key] != null) {
    return encodeURIComponent(interpolate[key]);
  }

  return '';
});

const request = (client, method, path, opts) => {
  const headers = opts.headers ? Object.assign(
    {}, client.options.headers, opts.headers
  ) : client.options.headers;
  const options = Object.assign({}, client.options, opts);
  const baseUri = template(options.baseUri, options.baseUriParameters);

  if (typeof options.query === 'string') {
    options.query = queryString.parse(options.query);
  }

  let reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    json: !Buffer.isBuffer(options.body),
    method,
    headers,
    formData: options.formData,
    body: options.body,
    qs: options.query,
    options: options.options,
    resolveWithFullResponse: true
  };

  if (options.options !== undefined) {
    reqOpts = Object.assign(reqOpts, options.options);
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts);
  }

  debuglog(`[REQUEST]: ${JSON.stringify(reqOpts, null, 2)}`);

  return rp(reqOpts)
    .then((response) => {
      const responseLog = {
        headers: response.headers,
        body: response.body,
        statusCode: response.statusCode
      };
      debuglog(`[RESPONSE]: ${JSON.stringify(responseLog, null, 2)}`);

      // adding backward compatibility
      response.status = response.statusCode;
      return response;
    })
    .catch((error) => {
      debuglog(`[RESPONSE]: ${JSON.stringify(error, null, 2)}`);

      // rethrow the error so that the returned promise is rejected
      throw error;
    });
};

class Client {
  constructor(options) {
    this.path = '';
    this.options = Object.assign({
      baseUri: 'http://api.programator.sk/',
      baseUriParameters: {},
      headers: {}
    }, options);
    this.customRequest = (method, path, opts) => request(
      this, method, path, opts
    );

    this.form = (payload) => {
      const data = {
        formData: payload,
        append(key, value) {
          if (typeof value !== 'string') {
            this.formData.file = value;
          } else {
            data.formData[key] = value;
          }
        }
      };
      return data;
    };

    this.gallery = new Gallery(this, '/gallery');
    this.images = new Images(this, '/images');
  }

  setHeaders(headers) {
    this.options.headers = headers;
  }

  use(name, module) {
    const moduleType = typeof module;
    if (Object.prototype.hasOwnProperty.call(this, name)) {
      throw Error(`The property ${name} already exists`);
    }
    switch (moduleType) {
      case 'string':
        // eslint-disable-next-line
        this[name] = require(module);
        break;
      case 'function':
        this[name] = new module(); // eslint-disable-line new-cap
        break;
      case 'object':
        this[name] = module;
        break;
      case 'undefined':
        if (typeof name === 'string') {
          // eslint-disable-next-line
          this[name] = require(name);
          break;
        }
        throw Error('Cannot create the extension point with the values provided');
      default:
        throw Error('Cannot create the extension point with the values provided');
    }
  }
}

class Gallery {
  constructor(client, path) {
    this.client = client;
    this.path = path;
  }

  path(uriParams) {
    return new Gallery.Path(
      this.client,
      this.path + template('/{path}',
        Object.assign({}, uriParams))
    );
  }

  get(query, opts) {
    const options = Object.assign(query && query.formData ? query : {
      query
    }, opts);
    return request(this.client, 'get', this.path, options);
  }

  post(body, opts) {
    const options = Object.assign(body && body.formData ? body : {
      body
    }, opts);
    return request(this.client, 'post', this.path, options);
  }
}

Gallery.Path = class {
  constructor(client, path) {
    this.client = client;
    this.path = path;
  }

  get(query, opts) {
    const options = Object.assign(query && query.formData ? query : {
      query
    }, opts);
    return request(this.client, 'get', this.path, options);
  }

  delete(body, opts) {
    const options = Object.assign(body && body.formData ? body : {
      body
    }, opts);
    return request(this.client, 'delete', this.path, options);
  }

  post(body, opts) {
    const options = Object.assign(body && body.formData ? body : {
      body
    }, opts);
    return request(this.client, 'post', this.path, options);
  }
};

class Images {
  constructor(client, path) {
    this.client = client;
    this.path = path;
  }

  wXH(uriParams) {
    return new Images.WXh(
      this.client,
      this.path + template('/{w}x{h}',
        Object.assign({}, uriParams))
    );
  }
}

Images.WXh = class {
  constructor(client, path) {
    this.client = client;
    this.path = path;
  }

  path(uriParams) {
    return new Images.WXh.Path(
      this.client,
      this.path + template('/{path}',
        Object.assign({}, uriParams))
    );
  }
};

Images.WXh.Path = class {
  constructor(client, path) {
    this.client = client;
    this.path = path;
  }

  get(query, opts) {
    const options = Object.assign(query && query.formData ? query : {
      query
    }, opts);
    return request(this.client, 'get', this.path, options);
  }
};
Client.version = 'v1';
Client.Security = {
};
module.exports = Client;
