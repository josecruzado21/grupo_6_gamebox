  
const path = require('path');
const usersController = {
    login: (req, res) => {
       
        let title = 'Gamebox | Login ';
     
         res.render('pages/users/login', {
             'title': title
         })

    },
    register: (req, res) => {
      
               
        let title = 'Gamebox | Registro ';
     
         res.render('pages/users/register', {
             'title': title
         })
    },
    profile: (req, res) => {
      
        let title = 'Gamebox | Perfil ';
     
        res.render('pages/users/profile', {
            'title': title
        })
    }
};

module.exports = usersController;