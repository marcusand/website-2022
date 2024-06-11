<script lang="ts">
  import Experience from './components/Experience.svelte';
  import experiences from '$content/vita/experience/index';
  import educations from '$content/vita/education/index';
</script>

<h1>Vita</h1>
<h2>Experience</h2>
<div class="experience-container">
  {#each experiences as experience}
    <Experience data={experience} />
  {/each}
</div>

<h2>Education</h2>
<div class="experience-container">
  {#each educations as education}
    <Experience data={education} />
  {/each}
</div>

<style>
  .experience-container {
    margin-left: 20px;
  }

  @media only screen and (max-width: 900px) {
    .experience-container {
      margin-left: 0;
    }
  }
</style>
