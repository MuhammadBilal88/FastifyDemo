// const S = require('fluent-schema')

// const schema = S.object()
//   .id('http://foo/user')
//   .prop(
//     'email',
//     S.string()
//       .format(S.FORMATS.EMAIL)
//       .required()
//   )
  
//   .prop(
//     'birthday',
//     S.raw({ type: 'string', format: 'date', formatMaximum: '2020-01-01' }) // formatMaximum is an AJV custom keywords
//   )
//   .definition(
//     'address',
//     S.object()
//       .id('#address')
//       .prop('line1', S.anyOf([S.string(), S.null()])) // JSON Schema nullable
//       .prop('line2', S.string().raw({ nullable: true })) // Open API / Swagger  nullable
      
//   )
//   .prop('address', S.ref('#address'))

// console.log(JSON.stringify(schema.valueOf(), undefined, 2))




const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    test: Joi.object().required()
});

const data = {
    test:{    }
};

test(data);


function test(_data) {
    _data["gp"] = "test";

    _data = {
        good: "yes"
    };

    const _another_func = (_d) => {
        _d["bad"] = "yes";

        _d = {
            bad: "yes"
        };

        console.log(_d);

        return _d;
    };

    _data = _another_func(_data);

    console.log(_data);
}

const { error, value } = schema.validate(data);



console.log("JOI ERROR > ", error);

console.log("JOI VALUE >", value);

