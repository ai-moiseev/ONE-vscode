// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class GatherNdOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): GatherNdOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsGatherNdOptions(bb: flatbuffers.ByteBuffer, obj?: GatherNdOptions):
      GatherNdOptions {
    return (obj || new GatherNdOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsGatherNdOptions(bb: flatbuffers.ByteBuffer, obj?: GatherNdOptions):
      GatherNdOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new GatherNdOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startGatherNdOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endGatherNdOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createGatherNdOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    GatherNdOptions.startGatherNdOptions(builder);
    return GatherNdOptions.endGatherNdOptions(builder);
  }
}
