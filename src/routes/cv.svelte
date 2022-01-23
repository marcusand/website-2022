<script>
  import Experience from '../components/cv/Experience.svelte';
  import Header from '../components/cv/Header.svelte';

  import personData from '../content/cv/person.yaml';
  import experiences from '../content/cv/experience/index';
</script>

<Header data={personData} />
<hr />
<section>
  <h2>Experience</h2>
  <div>
    {#each experiences as experience}
      <Experience data={experience} />
    {/each}
  </div>
</section>
