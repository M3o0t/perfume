const array = new Map();

export default{
    $on(fn_name , fn ){
        if(!array.has(fn_name)){
            array.set(fn_name , [])
        }
        array.get(fn_name).push(fn);
    },
    $emit(fn_name , data){
        if(array.has(fn_name)){
            array.get(fn_name).forEach(fn => fn(data))
        }
    }
}