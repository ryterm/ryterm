<script>
	let { children } = $props();

	import "@/app.css";
	import Footer from "@/components/Footer.svelte";
	import Header from "@/components/Header.svelte";
</script>

<Header title={"Ryterm"}></Header>
{@render children()}
<Footer></Footer>
