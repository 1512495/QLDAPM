// var typeRepo = require('../repos/typeRepo'),
//   producerRepo = require('../repos/producerRepo');
// var type = typeRepo.loadAll('type');
// var producer = producerRepo.loadAll('producer');

module.exports = (req, res, next) => {

  if (req.session.isLogged === undefined) {
    req.session.isLogged = true;
    req.session.username = "";
    req.session.curUser = "";
  }
  res.locals.layoutVM = {
    // categories: LS,
    // suppliers: NXB,
    isLogged: req.session.isLogged,
    //isAdmin: req.session.admin,
    curUser: req.session.curUser,
    //numberItems: numberItems
  };
  next();
  //next();
};
