const { json, createError } = require("micro");
const mjml2html = require("mjml");
const AggregateError = require("aggregate-error");

module.exports = async (req, res) => {
  const { markup, options = {} } = await json(req);
  if (!markup) {
    throw createError(400, "Please send a valid markup");
  }

  const { errors, html } = mjml2html(markup, options);
  if (errors.length > 0) {
    const error = new AggregateError(errors);
    error.statusCode = 500;
    throw error;
  }

  return html;
};
