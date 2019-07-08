import fs from 'fs'

export default {
    file: {
        isExist: fs.constants.F_OK,
        isReadable: fs.constants.R_OK,
        isWritable: fs.constants.W_OK
    },
    packageFilterData: ['name', 'version', 'description', 'homepage', 'repository', 'author', 'keywords', 'engines', 'license']
}
