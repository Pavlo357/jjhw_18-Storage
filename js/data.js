function getInfo() {
    if (localStorage.userAccount) {
        let userAccount = localStorage.getItem("userAccount");
        userAccount = JSON.parse(userAccount);
        let ul = document.createElement("ul");
        document.body.append(ul);
        for (let i in userAccount) {
            let li = document.createElement("li");
            li.innerHTML = `${i} - ${userAccount[i]}`;
            ul.prepend(li);
        };
    };
};
getInfo();