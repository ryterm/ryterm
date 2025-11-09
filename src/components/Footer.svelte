<script>
	import RawButton from "./RawButton.svelte";
</script>

<footer class="w-full flex justify-center items-center">
	<div
		class="flex justify-evenly flex-col-reverse gap-4 sm:flex-row items-center border border-neutral-300 dark:border-neutral-700 rounded-xl w-full m-2 p-2"
	>
		<div class="flex flex-col justify-center items-center">
			<h5>
				Made with love by <RawButton
					label={"Aury"}
					func={() => {
						window.location.href = "https://git.sr.ht/~aury";
					}}
				></RawButton>!
			</h5>
		</div>
		<div class="flex flex-col justify-center items-center">
			<RawButton
				label={"Home"}
				func={() => {
					window.location.href = "/";
				}}
			></RawButton>
			<RawButton
				label={"Projects"}
				func={() => {
					window.location.href = "/projects";
				}}
			></RawButton>
			<RawButton
				label={"Who we are"}
				func={() => {
					window.location.href = "/about";
				}}
			></RawButton>
			<RawButton
				label={"Github"}
				func={() => {
					window.location.href = "https://github.com/ryterm-org";
				}}
			></RawButton>
			<RawButton
				label={"Support us"}
				func={() => {
					window.location.href =
						"https://www.patreon.com/15004923/join";
				}}
			></RawButton>
		</div>
	</div>
</footer>
