 
const WJ_DATA_KEY = "WJDATA"
const LOGIN_USER_KEY = "LOGIN_USER"

export function setWJData(data) {
    localStorage.setItem(WJ_DATA_KEY, JSON.stringify(data));
}

export function getWJData()
{
    return localStorage.getItem(WJ_DATA_KEY) || "[]" ;
}

// 获取当前登录用户
export function getCurrentUser()
{
    return localStorage.getItem(LOGIN_USER_KEY) || "guest" ;
}

// 设置当前登录用户
export function setCurrentUser(name)
{
    return localStorage.setItem(LOGIN_USER_KEY,name);
}

// 获取当前登录用户问卷数据
export function getCurrentUserWJData()
{
    let t = localStorage.getItem(getCurrentUser()) || getWJData();
    //let t = getWJData();
    return JSON.parse(t);
}

// 获取当前登录用户未填的问卷数据
export function getCurrentUserUnSubmitWJData()
{
    let t = getCurrentUserWJData() ;
    let ret = [];
    t.forEach(function(item,index,arr){
        if (item.write === null || item.write === undefined || item.write === false)
            ret.push(item);
    })
    return ret;
}

// 获取当前登录用户已填的问卷数据
export function getCurrentUserSubmitWJData()
{
    let t = getCurrentUserWJData() ;
    let ret = [];
    t.forEach(function(item,index,arr){
        if (item.write === true)
            ret.push(item);
    })
    return ret;
}

//按照id获取当前用户已填的问卷数据
export function getCurrentUserSubmitWJDataByID(id)
{
    let t = getCurrentUserWJData() ;
    let ret = [];
    t.forEach(function(item,index,arr){
        if (item.write === true && item.id === id)
            ret.push(item);
    })
    return ret;
}

function updateWJData(data) {
    localStorage.setItem(getCurrentUser(), JSON.stringify(data));
}
//提交当前问卷
// export function submitWJ(id)
// {
//     let t = getCurrentUserWJData() ;
//     t.forEach(function(item,index,arr){
//         if (item.id === id){
//             item.write = true;
//         }
//     })
//     localStorage.setItem(getCurrentUser(), JSON.stringify(t));
//     //return localStorage.getItem(LOGIN_USER_KEY) || "guest" ;
// }
export function submitWJ(id, formData) {
    let t = getCurrentUserWJData();
    t.forEach(function (item, index, arr) {
      if (item.id === id) {
        item.write = true;
        item.questions.forEach((question) => {
            question.answer = formData[question.title];
          });
        //item.formData = formData; // 将填写的数据保存到问卷数据中
      }
    });
    localStorage.setItem(getCurrentUser(), JSON.stringify(t));
    updateWJData(t); // 更新问卷数据到JSON文件中
  }