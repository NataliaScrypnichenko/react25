import Joi from "joi";

// будемо визначати схему по якій об. будуть валідоватися
  const userValiadator= Joi.object({
    // касталізуємо messages({
    username: Joi.string().pattern(/w{4,}/).required().messages({
      'string.pattern.base':'only chars allowed & this must be at least 4 characters.' //це хр.ка
    }),

    password: Joi.string().min(3).max(6).required().messages({
        'string.min':'password can be at least 3 chars',
        'string.max':'password can be gt 6 chars'
    }),

    age:Joi.number().min(1).max(117).required().messages({
        'number.min':'min age is 1 ',
        'number.max':'max age is 117'
    }),

});
 export default userValiadator;
