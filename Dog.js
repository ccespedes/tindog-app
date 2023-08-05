class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    showStatusHtml(status) {
        const { name, avatar, age, bio } = this
        const result = status ? 'images/badge-like.png' : 'images/badge-nope.png'
        console.log('been liked?', status)
        return `
            <div class="dog-profile">
            <img class="badge" src="${result}" />
                <div class="dog-desc">
                    <h3>${name}, ${age}</h3>
                    <p>${bio}</p>
                </div>
                <img src="${avatar}" />
            </div>
            `
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="dog-profile">
                <div class="dog-desc">
                    <h3>${name}, ${age}</h3>
                    <p>${bio}</p>
                </div>
                <img src="${avatar}" />
            </div>
            `
    }

    noDogsHtml() {
        return `
            <div class="dog-profile">
                <div class="dog-end">
                    <h2>💔</h2>
                    <h3>No more Dogs!</h3>
                    <p>Please check back later for more furry friends.</p>
                </div>
                <img src="images/dog-end.jpg" />
            </div>
            `
    }
}

export default Dog