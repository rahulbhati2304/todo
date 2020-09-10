export const generateID = () => {
    const S4 = () =>(((1+Math.random())*0x10000)|0).toString(16).substring(1)
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}
export const fetch = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve([{ id: generateID(), title: 'Praveen Sir', completed: true }]), 100))