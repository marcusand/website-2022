<script lang="ts">
  import Header from '../components/cv/Header.svelte';
  import Section from '../components/Section.svelte';
  import Experience from '../components/cv/Experience.svelte';
  import Skill from '../components/cv/Skill.svelte';
  import Footer from '../components/cv/Footer.svelte';

  import personData from '$content/person.yaml';
  import experiences from '$content/cv/experience/index';
  import educations from '$content/cv/education/index';
  import skills from '$content/cv/skills/index';
  import hobbies from '$content/cv/hobbies.yaml';
</script>

<h1>CV</h1>
<Header data={personData} />
<Section title="Experience">
  {#each experiences as experience}
    <Experience data={experience} />
  {/each}
</Section>
<Section title="Education">
  {#each educations as education}
    <Experience data={education} />
  {/each}
</Section>
<Section title="Skills">
  {#each skills as skill}
    <Skill data={skill} />
  {/each}
</Section>
<Section title="Hobbies">
  <ul>
    {#each hobbies as hobby}
      <li>{@html hobby}</li>
    {/each}
  </ul>
</Section>
<Footer />
