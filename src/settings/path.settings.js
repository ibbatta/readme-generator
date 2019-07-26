import path from 'path';

export default {
    root: path.resolve(__dirname, '../..'),
    github: path.resolve(__dirname, '../../.github'),
    readme: {
        questions: path.resolve(__dirname, '../readme/questions'),
        assets: path.resolve(__dirname, '../readme/assets'),
        templates: path.resolve(__dirname, '../readme/templates'),
        hbsPartials: path.resolve(__dirname, '../readme/templates/partials')
    }
};
