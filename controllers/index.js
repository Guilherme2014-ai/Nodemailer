module.exports._spam = async (req,res,nodemailer) => {
    try{
        const { fromEmail,password,ToEmail,img,subject,title,content,repeat } = req.body;

    function ToEmails(email){
        const emailArray = String(email).split(" ")
        if(emailArray.length > 0){
            return emailArray
        }
        return String(email)
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: fromEmail,
            pass: password
        },
        tls: { rejectUnauthorized: false }
    })
    let i = 0

    async function run(html,subject,from,to){
        await transporter.sendMail({
            html,
            subject,
            from,
            to
        })
    }
    
    while (i<repeat) {
        run(
            `
            <h1>${title}</h1>
            <p>${content}</p>
            <br><img style="width:300px;" src="${img}" alt="Guigui">
            `,
            subject,
            subject+' <'+fromEmail+'>',
            ToEmails(ToEmail)
        )
        i++
    }
    res.render('index',{repeat})

    } catch(err){
        console.error(err)
        res.json({ERROR: err})
    }
}