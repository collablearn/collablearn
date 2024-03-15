<script lang="ts">
	import reset_pass_icon from '$lib/assets/reset_pass_icon.svg';
	import close_icon from '$lib/assets/close_icon.svg';
	import { scale } from 'svelte/transition';
	import { loginComponent } from '$lib';
</script>

<div
	class="fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center bg-[#00000050]"
>
	<div
		class="h-[739px] w-[826px] bg-submain relative flex flex-col px-[50px] py-[43px] shadow-lg shadow-black"
		in:scale
	>
		<button
			class="absolute top-0 right-0 mr-[38px] mt-[28px]"
			on:click={() => ($loginComponent.showCreateAccount = false)}
		>
			<img src={close_icon} alt="close-icon" class="" />
		</button>

		<div class="flex flex-col">
			<span class="font-bold text-[32px] text-main w-full">Create New Account</span>
			<span class="w-full font-medium text-[20px] text-main">Let's collab to each other!</span>

			<hr class="mt-[8px] border-[1px] border-main" />
		</div>

		<div class="mt-[35px] px-[17px] flex flex-col gap-[28px]">
			<div class="w-full flex items-center gap-[20px]">
				<input
					type="text"
					class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
					placeholder="First Name"
				/>
				<input
					type="text"
					class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
					placeholder="Last Name"
				/>
			</div>

			<input
				type="text"
				class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
				placeholder="Student ID"
			/>

			<input
				type="email"
				class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
				placeholder="Email Address"
			/>

			<input
				type="password"
				class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
				placeholder="Password"
			/>

			<input
				type="password"
				class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
				placeholder="Re-Enter Password"
			/>
		</div>

		<div class="mt-[39px] flex justify-center">
			<button
				class="rounded-[27.5px] bg-main font-bold text-[20] text-white py-[15.5px] flex justify-center w-[262px]"
			>
				SIGN UP
			</button>
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
