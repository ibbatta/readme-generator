import { constants } from 'fs';

export default {
    file: {
        isExist: constants.F_OK,
        isReadable: constants.R_OK,
        isWritable: constants.W_OK
    },
    packageFilterData: [
        'name',
        'version',
        'description',
        'homepage',
        'author',
        'engines',
        'dependencies'
    ]
};
