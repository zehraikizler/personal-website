let app = new Vue({
    el: '#app',
    data: {
      githubProjects: [],
      getYear: new Date().getFullYear(),
      comments: {
        title: '',
        text: ''
      },
      commentsPosts: []
    },
    methods: {
      getAllGithubsPosts() {
        fetch("https://api.github.com/users/zehraikizler/repos").then((res) => {
          res.json().then((response) => {
            this.githubProjects = response;
          });
        });
      },
      addComments(){
        this.commentsPosts.push(this.comments);
        this.comments.id = Date.now();
        this.comments = {
          title: '',
          text: ''
        }
      },
      deleteBtn(item) {
        const index = this.commentsPosts.indexOf(item);
        this.commentsPosts.splice(index, 1)
      },
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    created() {
      this.getAllGithubsPosts();
    }
  });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
    document.getElementById("nav").style.background = "rgb(255, 193, 7)";
  } else {
    document.getElementById("nav").style.background = "white";
  }
}