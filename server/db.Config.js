const dbName = 'ofds';
const dbUsername = 'hayagreevan'
const dbPassword = 'hayagreevan'
const dbCluster = 'cluster0.sjx3gfu.mongodb.net'

module.exports={
    url:'mongodb+srv://'+dbUsername+':'+dbPassword+'@'+dbCluster+'/'+dbName+'?retryWrites=true&w=majority'
}