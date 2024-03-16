<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import Loader from '../general-components/loader.svelte';

	let formActionErrors: any = null;
	let dbMessage = '';
</script>

<form
	method="post"
	action="?/passwordResetCodeAction"
	enctype="multipart/form-data"
	use:enhance
	class="flex flex-col gap-[23px] w-full mt-[21px]"
	in:fade
>
	<div class="flex flex-col gap-2">
		<label for="newPassword" class="text-[22px] text-main"
			>New Password

			<input
				id="newPassword"
				type="password"
				name="newPassword"
				class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
				placeholder=""
			/>
		</label>

		<label for="confirmNewPassword" class="text-[22px] text-main"
			>Confirm New Password
			<input
				id="confirmNewPassword"
				type="password"
				name="confirmNewPassword"
				class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
				placeholder=""
			/>
		</label>
	</div>

	{#each formActionErrors?.passwordResetCode ?? [] as errorMsg}
		<span class="text-main" transition:fade>{errorMsg}</span>
	{/each}

	<p class="text-main text-center {dbMessage ? 'flex' : 'hidden'}" transition:fade>{dbMessage}</p>

	<button class="font-bold text-white flex justify-center w-full bg-main py-[19px] rounded-lg">
		<Loader name="Update Password" loaderName="CHECKING..." />
	</button>
</form>
