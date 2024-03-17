<script lang="ts">
	import projects_sample_icon from '$lib/assets/projects_sample_icon.svg';
	import projects_sample_rating from '$lib/assets/projects_sample_rating.svg';
	import project_lock_icon from '$lib/assets/project_lock_icon.svg';

	export let isLock = false;
</script>

<button class="py-[30.5px] px-[30px] bg-white flex flex-col w-full relative text-left">
	<img src={projects_sample_rating} alt="rating-icon" class="absolute right-0 mr-[35px]" />
	<div class="flex gap-[10px] items-center">
		<div class="relative">
			<img src={projects_sample_icon} alt="sample-project-icon" class="" />
			<img
				src={project_lock_icon}
				alt="lock-icon"
				class="absolute right-0 top-0 {isLock ? 'block' : 'hidden'}"
			/>
		</div>

		<div class="flex flex-col gap-[15px] w-full">
			<span class="font-bold text-[15px]">PROJECT:</span>
			<span class="font-semibold text-[12px]">Vendo Machine Project - PISO WIFI</span>
			<span class="text-[12px]"
				>Calling out to those who have knowledge when it comes to electronics to join us to make a
				si..</span
			>
		</div>
	</div>

	<div class="w-full h-[25px] rounded-[12px] bg-main mt-[10px]"></div>
</button>
