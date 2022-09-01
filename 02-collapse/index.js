let contentIsVisible = true,
  titleHide = document.querySelector(".collapsible__action--hidden"),
  titleHideVisible = document.querySelector(".collapsible__action--visible"),
  content = document.querySelector(".collapsible__content"),
  contentHide = [{ opacity: 1 }, { opacity: 0 }],
  contentShow = [{ opacity: 0 }, { opacity: 1 }];

document.querySelector(".collapsible__action--hidden").style.display = "none";

document.querySelector(".collapsible__button").onclick = () => {
  if (contentIsVisible) {
    titleHideVisible.style.display = "none";
    titleHide.style.display = "block";

    content.animate(contentHide, 500);

    setTimeout(() => {
      content.style.display = "none";
    }, 490);
  } else {
    titleHideVisible.style.display = "block";
    titleHide.style.display = "none";
    content.style.display = "block";

    content.animate(contentShow, 500);
  }
  contentIsVisible = !contentIsVisible;
};
