// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class TransposeOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): TransposeOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsTransposeOptions(bb: flatbuffers.ByteBuffer, obj?: TransposeOptions):
      TransposeOptions {
    return (obj || new TransposeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsTransposeOptions(bb: flatbuffers.ByteBuffer, obj?: TransposeOptions):
      TransposeOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new TransposeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startTransposeOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endTransposeOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createTransposeOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    TransposeOptions.startTransposeOptions(builder);
    return TransposeOptions.endTransposeOptions(builder);
  }
}
