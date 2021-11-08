<script lang="ts">
  import {
    isCameraActive,
    currentVideoLayout,
    isTimeTickerPaused,
    timeTickerIndex,
    headline,
    byline,
    isBylineVisible,
    tagline,
    isTaglineVisible,
    programTitle,
    isLive,
    showMarkets,
    showIdentifierLeft,
    showIdentifierRight,
    identifierRightCredit,
    identifierLeftCredit,
    identifierLeftLocation,
    identifierLeftLocale,
    identifierRightLocation,
    identifierRightLocale,
  } from "../stores/controls";
  import { Tabs, TabList, TabPanel, Tab } from "./shared/Tabs";
  import Field from "./shared/Field.svelte";

  function selectLayout(layout: string) {
    currentVideoLayout.set(layout);
  }

  function killCams() {
    const videoElements = Array.from(document.getElementsByTagName("video"));
    videoElements.forEach((video) => {
      (video.srcObject as MediaStream)?.getTracks().forEach((track) => {
        track.enabled = false;
        track.stop();
      });
      video.srcObject = null;
    });

    isCameraActive.set(false);
  }

  const usTimeZones = ["eastern", "central", "mountain", "pacific"];
</script>

<div class="controls">
  <Tabs>
    <TabList>
      <Tab>Video</Tab>
      <Tab>Headline Block</Tab>
      <Tab>Logo Block</Tab>
    </TabList>

    <TabPanel>
      <div class="control-group">
        <Field type="checkbox" label="Camera on" value={isCameraActive} />
        <button on:click={killCams}>Disconnect Webcams</button>
        {#if $currentVideoLayout === "full"}
          <button on:click={() => selectLayout("double")}>Side-by-Side</button>
        {:else}
          <button on:click={() => selectLayout("full")}>Fullscreen</button>
        {/if}
      </div>
      <div class="control-group">
        <h4>Left Video Identifier</h4>
        <Field
          type="checkbox"
          label="Show Left Identifier"
          value={showIdentifierLeft}
        />
        <Field
          type="text"
          label="LeftID: Credit"
          value={identifierLeftCredit}
        />
        <Field
          type="text"
          label="LeftID: Location"
          value={identifierLeftLocation}
        />
        <Field type="text" label="LeftID: Locale" value={identifierLeftLocale}>
          {#each usTimeZones as timeZone}
            <option value={timeZone}>{timeZone}</option>
          {/each}
        </Field>
      </div>
      <div class="control-group">
        <h4>Right Video Identifier</h4>
        <Field
          type="checkbox"
          label="Show Right Identifier"
          value={showIdentifierRight}
        />
        <Field
          type="text"
          label="RightID: Credit"
          value={identifierRightCredit}
        />
        <Field
          type="text"
          label="RightID: Location"
          value={identifierRightLocation}
        />
        <Field
          type="text"
          label="RightID: Locale"
          value={identifierRightLocale}
        >
          {#each usTimeZones as timeZone}
            <option value={timeZone}>{timeZone}</option>
          {/each}
        </Field>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="control-group">
        <Field type="textarea" label="Headline" value={headline} />
        <Field type="checkbox" label="Show Byline" value={isBylineVisible} />
        <Field type="textarea" label="Byline" value={byline} />
        <Field type="checkbox" label="Show Tagline" value={isTaglineVisible} />
        <Field type="text" label="Tagline" value={tagline} />
      </div>
    </TabPanel>
    <TabPanel>
      <div class="control-group">
        <Field type="checkbox" label="Live" value={isLive} />
        <Field type="text" label="Program Title" value={programTitle} />
        <Field type="checkbox" label="Show Markets" value={showMarkets} />
        <Field
          type="checkbox"
          label="Pause Time Rotation"
          value={isTimeTickerPaused}
        />
        <div>
          <button on:click={$timeTickerIndex.decrement}>Prev Time Item</button>
          <button on:click={$timeTickerIndex.increment}>Next Time Item</button>
        </div>
      </div>
    </TabPanel>
  </Tabs>
</div>

<style lang="scss">
  .controls {
    display: flex;
    height: clamp(300px, 100vh - var(--app-height), 600px);
    overflow-y: auto;
    font-size: 14px;

    & :global(.tab-panel) {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      padding: 15px;

      & :global(label) {
        margin-bottom: 15px;
      }

      & :global(button) {
        font-size: 14px;
        max-width: 190px;
        margin: 5px 8px;
      }

      & :global(input) {
        font-size: 14px;
      }
    }
  }

  .control-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 20px;
    width: 400px;
  }
</style>
