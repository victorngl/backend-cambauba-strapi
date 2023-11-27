import { sanitize, validate } from '@strapi/utils';

export default {
  async move(ctx: { request: { body: { direction: string; } }; }) {
    const contentType = strapi.contentType('api::catraca.catraca');

    return 'ok'
  }
}