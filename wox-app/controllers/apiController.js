function index(req,res) {
    res.json({
        message: 'Wox: find your path!',
        collaborators: 'Julie Huang',
        documentation_url:'https://github.com/heyjulieh/project-03-wox.git',
        base_url: 'localhost:3000',
        endpoint: [
            {
            method: 'GET',
            path: '/api',
            description: 'shows all avaliable routes as JSON'
            },
            {
            method: 'GET',
            path: '/api/users',
            description: 'shows all users as JSON'
            },
            {
            method: 'GET',
            path: '/api/walks',
            description: 'shows all walks as JSON'
            },
            {
            method: 'GET',
            path: '/api/users/:userId',
            description: 'shows a specific user as JSON'
            },
            {
            method: 'GET',
            path: '/api/users/:userId/walks/',
            description: 'shows all walks for a specific user as JSON'
            },
            {
            method: 'GET',
            path: '/api/users/:userId/walks/:walkId',
            description: 'shows a specific walk for a specific user as JSON'
            },
            {
            method: 'POST',
            path: '/api/users/:userId/walks/:walkId',
            description: 'creates a specifc walk for a specific user'
            },
            {
            method: 'PUT',
            path: '/api/users/:userId/walks/:walkId',
            description: 'updates a specific walk for a specific user'
            },
            {
            method: 'DELETE',
            path: '/api/users/:userId/walks/:walkId',
            description: 'deletes a specific walk for a specific user'
            },
            {
            method: 'GET',
            path: '/api/users/:userId/messages/',
            description: 'shows all messages for a specific user as JSON'
            },
            {
            method: 'GET',
            path: '/api/users/:userId/messages/:messageId',
            description: 'shows a specific message for a specific user as JSON'
            },
            {
            method: 'POST',
            path: '/api/users/:userId/messages/:messageId',
            description: 'creates a specifc message for a specific user'
            },
            {
            method: 'DELETE',
            path: '/api/users/:userId/messages/:messageId',
            description: 'deletes a specific message for a specific user'
            }
        ]
    });
}

module.exports = {
  index: index
}
