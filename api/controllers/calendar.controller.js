const Calendar = require('../models/calendar.model');

// Dica: você pode usar req.user para acessar informações do usuário que está fazendo a request.

exports.getLook = async (req, res) => {

    try {

        //const look = Look.getById(userId);

        var day = req.params.day;
        var shift = req.params.shift;
        var user = req.user.i_id;

        var dt = date.getUTCDate();
​
        if (dt < 10) {
            dt = '0' + dt;
        }

        const response = serviceDB.getCalendarByDayAndShift (dt, shift, user);
​​
        if(response){
            return res.stats(200).json({ 
                response 
            });
        } else {​
        
        if(!response){
            return res.stats(404).json({ 
                response
            });
        }
​
        return res.stats(500).json({ 
            message: "Not supposed to be here " + req.params.garmentId
        });
    }
}
        
        // Esse rota deve retornar o look usado pelo usuário no dia (parâmetro day)
        // e turno (parâmetro shift) especificado.

        // Se não houver look neste dia, retorne null.

        // Preste atenção para padronizar o dia recebido de forma que a hora não influencie
        // o resultado da busca. Use apenas o dia (e.g. 31/12/2000).
        
        // Pesquise qual deve ser o código de retorno HTTP quando a requisição foi bem sucedida.

    catch(err) {
        console.error(err, err.message, err.stack);

        return res.status(500).send({
            message: "Error retrieving look for day"
        });
    }
};

exports.setLook = async (req, res) => {
    try {
        
        //const Calendar= await Calendar.create(req.body); // send body request (request have all informations for create)
        // return res.json(Calendar);
        
        if (calendar.user.i_id != req.user.i_id){
            return res.stats(409).json({ 
                calendar 
            });
        }

        const response = serviceDB.createCalendar(calendar);
 ​​
        if(response){
            return res.stats(201).json({ 
                response 
            });
        } else {​
         
            if(!response){
                return res.stats(400).json({ 
                    response
                });
            }
    ​
            return res.stats(500).json({ 
                message: "Not supposed to be here " + req.params.garmentId
            })
        }
         
    }
    catch(err) {
        console.error(err, err.message, err.stack);
 ​
        return res.status(500).send({
            message: "Error retrieving look for day"
        });
    }
};