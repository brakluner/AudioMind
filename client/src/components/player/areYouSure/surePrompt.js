 export default function areYouSure(res) {
    const sure = window.confirm("Are you sure?")
    console.log(sure)
    if (sure) {
        console.log("yaay")
        fetch(`/files/`+res, {method: 'DELETE'})
        .then(() => {})
    }
    };
