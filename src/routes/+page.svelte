<script lang="ts">
	import nafLogo from '$lib/assets/new_alexandria_foundation_logo.png';
	import titlePageImage from '$lib/assets/pausanias-title-page.jpg';
</script>

<div class="bg-white dark:bg-gray-900">
	<main>
		<!-- Hero section -->
		<div class="relative isolate overflow-hidden bg-white dark:bg-gray-900">
			<div
				aria-hidden="true"
				class="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
			>
				<div
					style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
					class="aspect-1108/632 w-277 bg-linear-to-r from-[#fff580] to-[#e59f46] opacity-20"
				></div>
			</div>
			<div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
				<div class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
					<img src={nafLogo} alt="New Alexandria Foundation" class="h-11" />
					<h1
						class="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white"
					>
						A Pausanias Reader in Progress
					</h1>
					<p
						class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400"
					>
						Including a commentary-in-progress by <a href="https://gnagy.scholars.harvard.edu"
							>Gregory Nagy</a
						>, Francis Jones Professor of Classical Greek Literature and Professor of Comparative
						Literature at Harvard University
					</p>
					<p
						class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400"
					>
						A revised English translation based on an original translation by W. H. S. Jones, 1918
						(Scroll 2 with H. A. Ormerod), containing some of the footnotes added by Jones
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a
							href="/passages"
							class="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus-visible:outline-yellow-500"
							>Scroll 1 (Attica)</a
						>
					</div>
				</div>
				<div
					class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
				>
					<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
						<img
							width="2432"
							height="1442"
							src={titlePageImage}
							alt="Manuscript title page of Pausanias Periegesis"
							class="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
						/>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="border-t border-gray-200 py-12 md:flex md:items-center md:justify-between dark:border-white/10"
		>
			<div class="flex justify-center gap-x-6 md:order-2">
				<a
					href="https://codeberg.org/org/new-alexandria-foundation"
					class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
				>
					<span class="sr-only">Open Source</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
						/>
					</svg>
				</a>
			</div>
			<p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
				&copy; 2025 <a href="https://newalexandria.info">New Alexandria Foundation</a>
			</p>
		</div>
	</footer>
</div>
