import * as Joi from "joi";
// будемо визначати модель нашого об'єкта, щоб знати що писати в messages() то заходимо на сайт https://joi.dev/ потім арі errors
export const carValidator =Joi.object({
    brand: Joi.string().pattern(new RegExp("^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$"))
        .messages({'string.pattern.base':'Your brand value didnt match pattern'}),
    price: Joi.number().min(0).max(100000000).messages({
        "number.min":"min price is 0",
        "number.max":"max price is 100 000 000",
    }),
    year: Joi.number().min(1990).max(2024).messages({
        "number.min":"min year is 1990`",
        "number.max":"max year is 2024",
    }),
//
})