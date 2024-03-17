<script lang="ts">
	import { authComponent } from '$lib';
	import new_projects_icon from '$lib/assets//new_projects_icon.svg';
	import close_icon from '$lib/assets/close_icon.svg';
	import { scale } from 'svelte/transition';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="absolute left-0 right-0 top-0 bottom-0 bg-[#00000050] z-10 flex justify-center items-center"
	on:click|self={() => ($authComponent.projectRoute.showPublicModal = false)}
>
	<div
		class="w-[610px] h-[361px] bg-submain py-[45px] px-[54px] relative shadow-lg shadow-black"
		in:scale
	>
		<div class="absolute right-0 top-0">
			<button class="mr-[19px] mt-[19px]"><img src={close_icon} alt="close-icon" class="" /></button
			>
		</div>

		<div class="flex items-center gap-[19px]">
			<div class="w-[260px] h-[260px] bg-slate-400"></div>

			<div class="text-main flex flex-col gap-[20px]">
				<div class="">
					<p class="font-bold text-[16px]">PROJECT NAME:</p>
					<p class="text-[14px]">Assignments sa Filipino (El Filibusteris- mo)</p>
				</div>

				<div class="">
					<p class="font-bold text-[16px]">HOST:</p>
					<p class="text-[14px]">Rexel John G. Cruz</p>
				</div>

				<div class="">
					<p class="font-bold text-[16px]">STATUS:</p>
					<p class="text-[14px]">In-meeting</p>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-end">
			<button
				class="w-[93px] bg-main rounded-[5px] text-submain text-[15px] font-bold h-[35px] flex justify-center items-center"
				>JOIN</button
			>
		</div>
	</div>
</div>
