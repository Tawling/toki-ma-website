module.exports = function (plop) {
    plop.setGenerator('create', {
        description: 'creates a component or page with boilerplate code',
        prompts: [
            {
                type: 'list',
                name: 'typeToCreate',
                message: 'Would you like to create a page or a component?',
                choices: ['page', 'component'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Name: ',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description: ',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/{{ typeToCreate }}s/{{ camelCase name }}/{{ camelCase name }}.tsx',
                templateFile: 'plop_templates/new_{{ typeToCreate }}.hbs',
            },
        ],
    });
};
