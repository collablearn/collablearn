<script lang="ts">
	export let name = '';
	export let loader = false;
	export let loaderName = '';
	export let color = 'border-b-main';
</script>

<div class="">
	{#if loader}
		<div class="flex items-center gap-1">
			<span>{loaderName}</span>
			<div class="w-4 h-4 border-4 {color} rounded-full animate-spin"></div>
		</div>
	{:else}
		<span>{name}</span>
	{/if}
</div>
