<script lang="ts">
	import search_icon from '$lib/assets/search_icon.svg';
	import { authComponent } from '$lib';

	import ProjectCard from '$lib/components/user-components/project-components/project-card.svelte';
	import CreateProject from '$lib/components/user-components/project-components/create-project.svelte';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import JoinWithPassModal from '$lib/components/user-components/project-components/join-with-pass-modal.svelte';
	import JoinPublicModal from '$lib/components/user-components/project-components/join-public-modal.svelte';

	$authComponent.activeItem = '/projects';

	let sampleMockData = [
		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: true
		},

		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: true
		},

		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: true
		},

		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: false
		},

		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: true
		},

		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: false
		},
		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: true
		},
		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: false
		},
		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: true
		},
		{
			title: 'Vendo Machine Project - PISO WIFI',
			isLock: false
		}
	];

	let nextPage = 0;

	$: displayMockData = samplePaginated[nextPage];

	let samplePaginated: { title: string; isLock: boolean }[][] = [[]];

	const clientSidePaginate = (array: { title: string; isLock: boolean }[], pageSize: number) => {
		// Initialize an empty array to store the paginated data
		const paginatedData = [];

		// Loop through the original array in chunks of 'pageSize' length
		for (let i = 0; i < array.length; i += pageSize) {
			// Slice a portion of the array from 'i' to 'i + pageSize'
			const page = array.slice(i, i + pageSize);

			// Push the sliced page (sub-array) into the 'paginatedData' array
			paginatedData.push(page);
		}
		// Return the paginated data (array of arrays)
		return paginatedData;
	};

	onMount(() => (samplePaginated = clientSidePaginate(sampleMockData, 6)));

	const handleClick = (sample: { title: string; isLock: boolean }) => {
		if (sample.isLock) $authComponent.projectRoute.showLockedModal = true;
		else $authComponent.projectRoute.showPublicModal = true;
	};
</script>

<div class="bg-submain min-h-screen pt-[49px] px-[58.5px] relative">
	{#if $authComponent.projectRoute.showLockedModal}
		<JoinWithPassModal />
	{:else if $authComponent.projectRoute.showPublicModal}
		<JoinPublicModal />
	{/if}

	{#if $authComponent.projectRoute.showCreateNewProject}
		<CreateProject />
	{/if}
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-[24px]">
			<button
				class="bg-main text-submain font-semibold text-[16px] rounded-[23.5px] py-[14px] px-[23px] w-[161px]"
				on:click={() => ($authComponent.projectRoute.showCreateNewProject = true)}
				>NEW PROJECT</button
			>

			<button
				class="bg-main text-submain font-semibold text-[16px] rounded-[23.5px] py-[14px] px-[23px] w-[161px]"
				>REFRESH</button
			>
		</div>

		<div class="bg-black relative w-[373px] flex items-center">
			<input
				type="text"
				placeholder="SEARCH PROJECT NAME"
				class="py-[14.5px] px-[20px] text-[15px] font-medium italic w-full"
			/>
			<div class="absolute right-0 top-0 bottom-0 flex items-center justify-center">
				<button class="mr-[12px]">
					<img src={search_icon} alt="search-icon" class="" />
				</button>
			</div>
		</div>
	</div>

	<hr class="mt-[33px] border-[1px] border-main" />

	<div class="mt-[54px] flex flex-wrap gap-x-[50px] gap-y-[30px] justify-center">
		{#each displayMockData as sample}
			<div class="w-[459px] min-h-[195px]">
				<ProjectCard isLock={sample.isLock} on:click={() => handleClick(sample)} />
			</div>
		{/each}
	</div>

	<div class="fixed right-0 bottom-0 mr-[40px] mb-[50px]">
		<div class="flex items-center gap-[14px]">
			{#each samplePaginated as nothing, index}
				<button
					class="w-[25px] h-[25px] {nextPage === index ? 'bg-main' : 'bg-[#D9D9D9]'} rounded-full"
					on:click={() => (nextPage = index)}
				></button>
			{/each}
		</div>
	</div>
</div>
