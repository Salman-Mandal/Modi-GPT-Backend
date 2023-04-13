const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const app = express();
app.listen(3000);
app.use(express.json());

app.use(cors());
const configuration = new Configuration({
    organization: "org-GAJHFrlVCmqVX9wpmbCvh8wW",
    apiKey: "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",
});
app.post("/chat", (req, res) => {
    const key = req.body.msg===""?"hi":req.body.msg;
    const words=100;
    const openai = new OpenAIApi(configuration);
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${key}.ans every question in the style of Narendra Modi in ${words} words. For example, "Kya haal hai?. add some modi's dilogue example- "
        Namaste bhaiyo aur behno" and so on`,
        max_tokens: words,
        top_p: 1.0,
        temperature: 1,
    }).then((responce) => {
        console.log(responce.data.choices[0].text);
        res.json({
            data:responce.data.choices[0].text
        });
    }).catch((err) => {
        console.log(err);
    });

})


