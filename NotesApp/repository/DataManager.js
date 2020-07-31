const fs = require('fs');

class DataManager {
    LoadData(path) {
        const dataBuffer = fs.readFileSync(path); 
        const data = JSON.parse(dataBuffer.toString());
        return data;
    }

    SaveData(path, data) {
        const dataString = JSON.stringify(data);
        fs.writeFileSync(path, dataString);
    }
}

module.exports = DataManager;
