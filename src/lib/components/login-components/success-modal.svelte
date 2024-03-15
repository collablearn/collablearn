<script lang="ts">
	import check_icon from '$lib/assets/check_icon.svg';
	import { scale } from 'svelte/transition';

	export let showSuccessCreateModal = false;
</script>

{#if showSuccessCreateModal}
	<div
		class="fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center bg-[#00000050]"
	>
		<div class="w-[613px] bg-submain h-[638px] px-[67px] flex flex-col items-center" in:scale>
			<div class="mt-[85px]">
				<img src={check_icon} alt="check-icon" class="" />
			</div>

			<hr class="border-[1px] border-main mt-[75px] w-full" />

			<span class="text-main font-bold text-[34px] mt-[41px] text-center">Awsome!</span>
			<span class="font-normal text-[20px] text-main text-center mt-[46px]"
				>You account has been successfully registered! Proceed to Log in your account.
			</span>

			<div class="mt-[67px]">
				<button
					class="w-[218px] py-[15.5px] flex justify-center items-center bg-main text-white text-[20px] font-bold rounded-[26px]"
					on:click={() => (showSuccessCreateModal = false)}
					>Got it!
				</button>
			</div>
		</div>
	</div>
{/if}
