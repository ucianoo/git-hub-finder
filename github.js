class Github {
    constructor() {
      this.client_id ='a260a9da9ba1a89a68a0';
      this.client_secret ='23811723d2dc64bd22b9092a6cf79e084da6c8d9';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}