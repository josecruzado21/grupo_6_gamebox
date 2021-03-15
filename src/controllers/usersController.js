
const path = require('path');
const bcryptjs = require('bcryptjs');

//Requiero el modelo
const User = require('../models/User');

const titleLogin = 'Gamebox | Login '

const usersController = {
    login: (req, res) => {
        res.render('pages/users/login', {
            'title': titleLogin
        })
    },


    loginProcess: (req, res) => {
        let user = User.findByProperty('email', req.body.email);
        if (user) {
            let checkPass = bcryptjs.compareSync(req.body.password, user.password);
            if (checkPass) {
                delete user.password;
                req.session.userLogged = user;

                if (req.body.sesion) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 30 })
                }

                return res.redirect('/usuarios/perfil');
                
            } else {
                return res.render('pages/users/login', {
                    title: titleLogin,
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                });
            }
        }



        return res.render('pages/users/login', {
            title: titleLogin,
            errors: {
                email: {
                    msg: 'No se encuentra este email en la base de datos'
                }
            }
        });
    },


    logout: (req, res) => {
        req.session.destroy();

        res.clearCookie('userEmail');

        return res.redirect('/');
    },

    register: (req, res) => {


        let title = 'Gamebox | Registro ';

        res.render('pages/users/register', {
            'title': title
        })
    },
    profile: (req, res) => {

        let title = 'Gamebox | Perfil ';

        if (req.session.userLogged) {
            res.render('pages/users/profile', {
                'title': title,
                user: req.session.userLogged
            })
        } else {
            res.redirect('/')
        }
    }
};

module.exports = usersController;