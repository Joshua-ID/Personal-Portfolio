<template>
  <div data-aos="fade-right" data-aos-duration="1500" class="contact-section">
    <div class="contact-label-and-socials">
      <label class="label">Don't be a stranger</label>
      <div class="social-icons-wrapper">
        <a href="https://x.com/j_joseph69" target="_blank"
          ><i
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1500"
            class="fa-brands fa-x-twitter anchor-link"
        /></a>
        <a href="https://www.facebook.com/profile.php?id=61561757657725" target="_blank"
          ><i
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1500"
            class="fa-brands fa-facebook anchor-link"
        /></a>
        <a href="mailto:idarajoshua12@gmail.com" target="_blank">
          <i
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1500"
            class="fa-solid fa-envelope-open-text anchor-link"
        /></a>
        <a href="https://github.com/Joshua-ID" target="_blank">
          <i
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1500"
            class="fa-brands fa-github anchor-link"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<style>
.contact-section {
  padding-top: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  .contact-label-and-socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .social-icons-wrapper {
      display: flex;
      gap: 1rem;

      i {
        font-size: clamp(0.9375rem, 0.7713rem + 0.5319vw, 1.25rem);
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(130%);
        }
      }
    }
  }
}
</style>
