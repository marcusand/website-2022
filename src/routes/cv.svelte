<script>
  import Header from '../components/cv/Header.svelte';
  import Experience from '../components/cv/Experience.svelte';
  import Skill from '../components/cv/Skill.svelte';

  import personData from '../content/cv/person.yaml';
  import experiences from '../content/cv/experience/index';
  import educations from '../content/cv/education/index';
  import skills from '../content/cv/skills/index';
</script>

<h1>CV</h1>
<Header data={personData} />
<section>
  <h2>Experience</h2>
  <div>
    {#each experiences as experience}
      <Experience data={experience} />
    {/each}
  </div>
</section>
<section>
  <h2>Education</h2>
  <div>
    {#each educations as education}
      <Experience data={education} />
    {/each}
  </div>
</section>
<section>
  <h2>Skills</h2>
  <div>
    {#each skills as skill}
      <Skill data={skill} />
    {/each}
  </div>
</section>

<style>
  section {
    --left-column-width: 30%;
    --right-column-width: 70%;

    margin-top: 4rem;
    page-break-inside: avoid;
  }
</style>
