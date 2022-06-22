const router = require('express').Router();
const { Project, User } = require('../models');
const Player = require('../models/Player');
const withAuth = require('../utils/auth');

const players = [
  {
    "number": 4,
    "name": "Miro",
    "goals": 1,
    "assists": 5
  },
  {
    "number": 14,
    "name": "Jamie",
    "goals": 2,
    "assists": 2
  },
  {
    "number": 91,
    "name": "Tyler",
    "goals": 0,
    "assists": 1
  }
]

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log('in project');
console.log(projectData);
    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in,
    
    });
  } 
  
  catch (err) {
    res.status(500).json(err);
  }
});

// //get one dish
// router.get('/dish/:num', async (req, res) => {
//   // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
//   return res.render('dish', dishes[req.params.num - 1]);
// });

router.get('/player/:id', async (req, res) => {
 try {
  const playerData = await Player.findByPk(req.params.id);
  console.log('in player');
  console.log(playerData);
//  const player = playerData.get({ plain: true });
  res.render('player', playerData)
 }  catch(err){res.status(500).json(err)}
});

// router.get('/player/:id', async (req, res) => {
//   try {
//     const playerData = await Player.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const player = playerData.get({ plain: true });

//     res.render('player/:number', {
//       ...player,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//line 27 get '/' project.findAll
//line 43 res.render('homepage', DB
//line 52 get '/project/:id' 
//line 65 res.render('project', DB
//line 80 router.get('/player/:num',
//line 81 res.render('player', F
//line 107 router.get('/profile',
//line 117 res.render('profile', F
//line 126 router.get('/login', 
//line 133 res.render('login');

module.exports = router;
