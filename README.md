# mjml-api
Tiny HTTP Interface to mjml for easy integration with different platforms.


## API

### mjml2html
----
**Request**
```yaml
path: /
method: POST
content-type: application/json
# markup is required, option is pased to the second parameter of mjml2html
body: {"markup": "<replace with mjml markup here>", "options": {}}
```

**Response**
```yaml
200: Rendered html as response
400: Markup is not present
500: Mjml failed to process markup 
```

  