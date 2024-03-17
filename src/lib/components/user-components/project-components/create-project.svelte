<script lang="ts">
	import { authComponent } from '$lib';
	import new_projects_icon from '$lib/assets//new_projects_icon.svg';
	import close_icon from '$lib/assets/close_icon.svg';
	import { scale } from 'svelte/transition';
</script>

<div
	class="absolute left-0 right-0 top-0 bottom-0 bg-[#00000050] z-10 flex justify-center items-center"
>
	<div
		class="w-[715px] min-h-[456px] py-[32px] px-[42px] bg-submain relative shadow-lg shadow-black"
		in:scale
	>
		<div class=" absolute right-0 top-0">
			<button
				class="mr-[10px] mt-[10px]"
				on:click={() => ($authComponent.projectRoute.showCreateNewProject = false)}
				><img src={close_icon} alt="close-icon" /></button
			>
		</div>

		<div class="flex items-center gap-[10px]">
			<img src={new_projects_icon} alt="projects-icon " class="" />

			<div class="">
				<p class="font-semibold text-[24px] text-main">New Project</p>
				<p class="text-[18px] text-main">Create a project to start collaboration.</p>
			</div>
		</div>

		<div class="flex flex-col gap-[19px] mt-[30px]">
			<input
				type="text"
				class="h-[43px] w-full outline-none border-[2px] border-main bg-submain px-[21px] py-[12px] text-main"
				placeholder="Project Name"
			/>

			<textarea
				class="h-[117px] outline-none border-[2px] border-main bg-submain w-full px-[21px] py-[12px] text-main"
				placeholder="Description"
			/>

			<div class="flex gap-[24px] items-center">
				<input
					type="text"
					class="outline-none px-[21px] py-[12px] text-main border-[2px] border-main bg-submain w-[221px]"
					placeholder="Users (Max. 50)"
				/>
				<input
					type="text"
					class="outline-none px-[21px] py-[12px] text-main border-[2px] border-main bg-submain w-full"
					placeholder="Passcode"
				/>
			</div>
		</div>

		<div class="flex justify-center mt-[21px]">
			<button
				class="w-[133px] h-[43px] flex items-center justify-center text-[18px] font-bold text-submain bg-main rounded-[5px]"
				>Create</button
			>
		</div>
	</div>
</div>

<style>
	::-ms-input-placeholder {
		/* Edge 12-18 */
		color: #800000;
	}

	::placeholder {
		color: #800000;
	}
</style>
