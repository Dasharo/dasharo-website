const descriptionItems = document.querySelectorAll(".description-item");
const descriptionItemsImgs = document.querySelectorAll(".description-item-img");
const descriptionContainers = document.querySelectorAll(".description-hidden");

descriptionItems.forEach((item, index) => {
  let isDescriptionOpen = false;
  item.addEventListener("click", () => {
    if (isDescriptionOpen) {
      descriptionContainers[index].classList.remove(
        "content-item-description-active"
      );
      descriptionItemsImgs[index].classList.remove("content-item-title-active");
    } else {
      descriptionContainers[index].classList.add(
        "content-item-description-active"
      );
      descriptionItemsImgs[index].classList.add("content-item-title-active");
    }
    isDescriptionOpen = !isDescriptionOpen;
  });
});
