import Yaml from 'js-yaml';

const parseData = content => {
    return new Promise((resolve, reject) => {
        try {
            resolve(Yaml.safeLoad(content))
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    parseData
};
