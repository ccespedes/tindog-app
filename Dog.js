class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    isLiked() {
        this.hasBeenLiked = true
    }

    isRejected() {
        this.hasBeenLiked = false
    }

    getBadgeHtml() {
        const result = this.hasBeenLiked ? 'images/badge-like.png' : 'images/badge-nope.png'
        return `
            <img class="badge" src="${result}" />
            `
    }

    getDogHtml(status) {
        const { name, avatar, age, bio } = this
        return `
            <div class="dog-profile">
            ${status ? this.getBadgeHtml() : ''}
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