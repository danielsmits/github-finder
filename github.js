class Github {
  constructor(){
    this.client_id = 'ab54c4250c481c1d00fa';
    this.client_secret = 'b93dea1266cfee8171371a0da704dc7f3ea98c57';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {

    }
  }
}
